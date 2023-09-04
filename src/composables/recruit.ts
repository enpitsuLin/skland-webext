import { format } from 'date-fns'
import { useNow } from '@vueuse/core'
import type { Recruit } from '~/types'
import { padTimestamp, parseDuration } from '~/logic/time'

export function useRecruits(recruits: Recruit[]) {
  const now = useNow()
  return computed(() => recruits.map((recruit) => {
    const finishAt = new Date(padTimestamp(recruit.finishTs))

    const nowDate = computed(() => format(now.value, 'yyyy MM dd'))
    const finishAtDate = format(finishAt, 'yyyy MM dd')
    const isFinished = computed(() => now.value > finishAt)
    return {
      finishAt: markRaw(finishAt),
      format: format(finishAt, `${nowDate.value === finishAtDate ? '今日' : '明日'} HH时mm分`),
      restTime: parseDuration(now.value, finishAt, { zero: true, format: ['hours', 'minutes'] }),
      isFinished,
    }
  }))
}
