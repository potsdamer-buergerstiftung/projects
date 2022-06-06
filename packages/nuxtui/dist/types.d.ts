
import { ModuleOptions, ModuleHooks } from './module'

declare module '@nuxt/schema' {
  interface NuxtConfig { ['ui']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['ui']?: ModuleOptions }
  interface NuxtHooks extends ModuleHooks {}
}


export { default } from './module'
