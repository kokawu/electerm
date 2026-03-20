const { rm, echo } = require('shelljs')
const {
  run,
  writeSrc,
  builder
} = require('./build-common')

async function main () {
  const pb = builder
  const publishMode = process.env.ELECTRON_BUILDER_PUBLISH_MODE
  const publishArg = publishMode ? ` --publish ${publishMode}` : ''
  echo('running build for win part nsis installer')

  echo('build nsis')
  rm('-rf', 'dist')
  writeSrc('win-x64-installer.exe')
  await run(`${pb} --win nsis${publishArg}`)
}

main()
