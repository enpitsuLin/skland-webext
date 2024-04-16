import type {
  MaybeRef,
  RemovableRef,
  UseStorageAsyncOptions,
} from '@vueuse/core'
import {
  useStorageAsync,
} from '@vueuse/core'
import { storage } from 'wxt/storage'

export function useStorage<T>(key: string, initialValue: MaybeRef<T>, options?: UseStorageAsyncOptions<T>): RemovableRef<T> {
  return useStorageAsync(key, initialValue, storage, options)
}

export function useStorageLocal<T>(key: string, initialValue: MaybeRef<T>, options?: UseStorageAsyncOptions<T>): RemovableRef<T> {
  return useStorageAsync(`local:${key}`, initialValue, storage, options)
}

export function useSessionStorage<T>(key: string, initialValue: MaybeRef<T>, options?: UseStorageAsyncOptions<T>): RemovableRef<T> {
  return useStorageAsync(`local:${key}`, initialValue, storage, options)
}

export function useSyncStorage<T>(key: string, initialValue: MaybeRef<T>, options?: UseStorageAsyncOptions<T>): RemovableRef<T> {
  return useStorageAsync(`local:${key}`, initialValue, storage, options)
}

export function useManagedStorage<T>(key: string, initialValue: MaybeRef<T>, options?: UseStorageAsyncOptions<T>): RemovableRef<T> {
  return useStorageAsync(`local:${key}`, initialValue, storage, options)
}