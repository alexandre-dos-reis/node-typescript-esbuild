import { build, context } from 'esbuild'

/** @type {import('esbuild').BuildOptions} */
const options = {
    entryPoints: ['src/index.ts'],
    bundle: true,
    outdir: 'dist',
    target: "node16",
    platform: "node",
    treeShaking: true,
    color: true,
}

if (process.env.NODE_ENV === 'development') {
    (await context(options)).watch()
} else {
    (await build({...options, minify: true}))
}
