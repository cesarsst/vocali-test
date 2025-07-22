
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'Navbar': typeof import("../components/Navbar.vue")['default']
    'ProjectListCard': typeof import("../components/ProjectListCard.vue")['default']
    'ProjectUploadCard': typeof import("../components/ProjectUploadCard.vue")['default']
    'RealtimeTranscriptionCard': typeof import("../components/RealtimeTranscriptionCard.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/.pnpm/@nuxt+image@1.10.0_@netlify+blobs@9.1.2_db0@0.3.2_ioredis@5.6.1_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../node_modules/.pnpm/@nuxt+image@1.10.0_@netlify+blobs@9.1.2_db0@0.3.2_ioredis@5.6.1_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'Icon': typeof import("../node_modules/.pnpm/@nuxt+icon@1.15.0_magicast@0.3.5_vite@6.3.5_@types+node@24.0.14_jiti@2.4.2_terser@5.43._c650e22a0cdf7094b2a6e1aa08a1c255/node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'NuxtPage': typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyNavbar': LazyComponent<typeof import("../components/Navbar.vue")['default']>
    'LazyProjectListCard': LazyComponent<typeof import("../components/ProjectListCard.vue")['default']>
    'LazyProjectUploadCard': LazyComponent<typeof import("../components/ProjectUploadCard.vue")['default']>
    'LazyRealtimeTranscriptionCard': LazyComponent<typeof import("../components/RealtimeTranscriptionCard.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+image@1.10.0_@netlify+blobs@9.1.2_db0@0.3.2_ioredis@5.6.1_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+image@1.10.0_@netlify+blobs@9.1.2_db0@0.3.2_ioredis@5.6.1_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
    'LazyIcon': LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+icon@1.15.0_magicast@0.3.5_vite@6.3.5_@types+node@24.0.14_jiti@2.4.2_terser@5.43._c650e22a0cdf7094b2a6e1aa08a1c255/node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const Navbar: typeof import("../components/Navbar.vue")['default']
export const ProjectListCard: typeof import("../components/ProjectListCard.vue")['default']
export const ProjectUploadCard: typeof import("../components/ProjectUploadCard.vue")['default']
export const RealtimeTranscriptionCard: typeof import("../components/RealtimeTranscriptionCard.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/.pnpm/@nuxt+image@1.10.0_@netlify+blobs@9.1.2_db0@0.3.2_ioredis@5.6.1_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/.pnpm/@nuxt+image@1.10.0_@netlify+blobs@9.1.2_db0@0.3.2_ioredis@5.6.1_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const Icon: typeof import("../node_modules/.pnpm/@nuxt+icon@1.15.0_magicast@0.3.5_vite@6.3.5_@types+node@24.0.14_jiti@2.4.2_terser@5.43._c650e22a0cdf7094b2a6e1aa08a1c255/node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const NuxtPage: typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyNavbar: LazyComponent<typeof import("../components/Navbar.vue")['default']>
export const LazyProjectListCard: LazyComponent<typeof import("../components/ProjectListCard.vue")['default']>
export const LazyProjectUploadCard: LazyComponent<typeof import("../components/ProjectUploadCard.vue")['default']>
export const LazyRealtimeTranscriptionCard: LazyComponent<typeof import("../components/RealtimeTranscriptionCard.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+image@1.10.0_@netlify+blobs@9.1.2_db0@0.3.2_ioredis@5.6.1_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+image@1.10.0_@netlify+blobs@9.1.2_db0@0.3.2_ioredis@5.6.1_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyIcon: LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+icon@1.15.0_magicast@0.3.5_vite@6.3.5_@types+node@24.0.14_jiti@2.4.2_terser@5.43._c650e22a0cdf7094b2a6e1aa08a1c255/node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.17.7_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compile_fd40ed30f60fc2c030bafd6fd83870f7/node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
