import type { UUID } from '../../shared'
import { type EntityDTO, EntityDTOKeys } from '../Entity'

/**
 * Represents Flashcard Tags entity DTO
 */
export type FlashcardTagsDTO = EntityDTO & {

  /**
   * Correspond Flashcard id
   */
  readonly flashcardId: UUID

  /**
   * Correspond Tag id
   */
  readonly tagId: UUID

}

/**
 * Card tags entity keys
 */
export const FlashcardTagsDTOKeys: ReadonlyArray<keyof FlashcardTagsDTO> = [
  ...EntityDTOKeys,
  'flashcardId',
  'tagId'
]
