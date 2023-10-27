import type { ISO8601, ScorePoint } from '../../shared'
import { type EntityDTO, EntityDTOKeys } from '../Entity'

/**
 * Represents Flashcard entity DTO
 */
export type FlashcardDTO = EntityDTO & {

  /**
   * Question
   */
  readonly question: string

  /**
   * Answer
   */
  readonly answer: string

  /**
   * External resource url
   */
  readonly url: string | null

  /**
   * Scores
   */
  readonly scores: ReadonlyArray<ScorePoint>

  /**
   * Scheduled date
   */
  readonly scheduledAt: ISO8601

}

/**
 * Flashcard DTO keys
 */
export const FlashcardDTOKeys: ReadonlyArray<keyof FlashcardDTO> = [
  ...EntityDTOKeys,
  'question',
  'answer',
  'url',
  'scores',
  'scheduledAt'
]
