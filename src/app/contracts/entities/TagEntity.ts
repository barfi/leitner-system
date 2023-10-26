import type { HEXColor } from '../shared/BrandedPrimitives'
import { type BaseEntity, baseEntityKeys } from './BaseEntity'

/**
 * Represents tag entity stored in the database
 */
export type TagEntity = BaseEntity & {

  /**
   * Title
   */
  readonly title: string

  /**
   * Description
   */
  readonly description: string

  /**
   * Foreground color
   */
  readonly fgColor: HEXColor

  /**
   * Background color
   */
  readonly bgColor: HEXColor

}

/**
 * Tag entity keys
 */
export const tagEntityKeys: ReadonlyArray<keyof TagEntity> = [
  ...baseEntityKeys,
  'title',
  'description',
  'fgColor',
  'bgColor'
]
