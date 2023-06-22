// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import {
  screen,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'
import { renderRoute } from '../../test-utils'
import nock from 'nock'
