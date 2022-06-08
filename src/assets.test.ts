import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
const sizeOfImage = promisify(require('image-size'))

describe('assets', () => {
  describe('tokens', () => {
    const ASSETS_DIRECTORY = './assets/tokens'
    const REQUIRED_ASSET_HEIGHT = 256
    const REQUIRED_ASSET_WIDTH = 256
    const REQUIRED_ASSET_TYPE = 'png'

    const assetPaths = fs
      .readdirSync(ASSETS_DIRECTORY)
      .map((assetFilename) => path.join(ASSETS_DIRECTORY, assetFilename))

    // TODO: update assets so they can pass these requirements
    xit.each(assetPaths)('%s is the required size', async (assetPath) => {
      const { height, width } = await sizeOfImage(assetPath)
      expect(height).toBe(REQUIRED_ASSET_HEIGHT)
      expect(width).toBe(REQUIRED_ASSET_WIDTH)
    })

    it.each(assetPaths)('%s is the required type', async (assetPath) => {
      const { type: assetType } = await sizeOfImage(assetPath)
      expect(assetType).toBe(REQUIRED_ASSET_TYPE)
    })
  })

  describe('addresses', () => {
    const ASSETS_DIRECTORY = './assets/addresses'
    const REQUIRED_ASSET_HEIGHT = 256
    const REQUIRED_ASSET_WIDTH = 256
    const REQUIRED_ASSET_TYPE = /(png|jpg)/

    const assetPaths = fs
      .readdirSync(ASSETS_DIRECTORY)
      .map((assetFilename) => path.join(ASSETS_DIRECTORY, assetFilename))

    // TODO: update assets so they can pass these requirements
    xit.each(assetPaths)('%s is the required size', async (assetPath) => {
      const { height, width } = await sizeOfImage(assetPath)
      expect(height).toBe(REQUIRED_ASSET_HEIGHT)
      expect(width).toBe(REQUIRED_ASSET_WIDTH)
    })

    it.each(assetPaths)('%s is the required type', async (assetPath) => {
      const { type: assetType } = await sizeOfImage(assetPath)
      expect(assetType).toMatch(REQUIRED_ASSET_TYPE)
    })
  })
})