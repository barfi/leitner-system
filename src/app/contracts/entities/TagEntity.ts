import type { HEXColor } from '../common'
import { type BaseEntity, baseEntityKeys } from './BaseEntity'

/**
 * Represents tag entity stored in the database
 */
export type TagEntity = BaseEntity & {

  /**
   * Title
   */
  title: string

  /**
   * Description
   */
  description: string

  /**
   * Foreground color
   */
  fgColor: HEXColor

  /**
   * Background color
   */
  bgColor: HEXColor

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
