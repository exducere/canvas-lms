/*
 * Copyright (C) 2024 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

// blocks
import {Container} from './user/blocks/Container'
import {ButtonBlock} from './user/blocks/ButtonBlock'
import {TextBlock} from './user/blocks/TextBlock'
import {HeadingBlock} from './user/blocks/HeadingBlock'
import {ResourceCard} from './user/blocks/ResourceCard'
import {IconBlock} from './user/blocks/IconBlock'
import {PageBlock} from './user/blocks/PageBlock'
import {ImageBlock} from './user/blocks/ImageBlock'
import {SVGImageBlock} from './user/blocks/SVGImageBlock'
import {IframeBlock} from './user/blocks/IframeBlock'

// sections
import {ResourcesSection, ResourcesSectionInner} from './user/sections/ResourcesSection'
import {ColumnsSection, NoSections} from './user/sections/ColumnsSection'
import {HeroSection, HeroTextHalf} from './user/sections/HeroSection'
import {NavigationSection, NavigationSectionInner} from './user/sections/NavigationSection'
import {AboutSection, AboutTextHalf} from './user/sections/AboutSection'
import {FooterSection} from './user/sections/FooterSection'
import {QuizSection} from './user/sections/QuizSection'

// import {Card, CardTop, CardBottom} from './user/Card'

const blocks = {
  PageBlock,
  ButtonBlock,
  TextBlock,
  Container,
  HeadingBlock,
  ResourceCard,
  IconBlock,
  ImageBlock,
  SVGImageBlock,
  IframeBlock,
  QuizSection,
  ResourcesSection,
  ResourcesSectionInner,
  ColumnsSection,
  NoSections,
  HeroSection,
  HeroTextHalf,
  NavigationSection,
  NavigationSectionInner,
  AboutSection,
  AboutTextHalf,
  FooterSection,

  // Card,  CardTop,  CardBottom,
}

export {blocks}
