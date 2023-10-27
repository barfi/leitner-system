import type { HEXColor } from '../../shared'
import { type EntityDTO, EntityDTOKeys } from '../Entity'

/**
 * Represents Tag entity DTO
 */
export type TagDTO = EntityDTO & {

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
 * Tag DTO keys
 */
export const TagDTOKeys: ReadonlyArray<keyof TagDTO> = [
  ...EntityDTOKeys,
  'title',
  'description',
  'fgColor',
  'bgColor'
]
