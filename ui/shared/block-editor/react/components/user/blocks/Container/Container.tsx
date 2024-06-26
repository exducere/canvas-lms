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
import React from 'react'
import {useEditor, useNode} from '@craftjs/core'
import {useClassNames} from '../../../../utils'
import {ContainerSettings} from './ContainerSettings'

export type ContainerProps = {
  id?: string
  className?: string
  'data-placeholder'?: string
  background?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export const Container = ({
  id,
  className = '',
  background = 'transparent',
  style = {},
  children,
  ...rest
}: ContainerProps) => {
  const {enabled} = useEditor(state => ({
    enabled: state.options.enabled,
  }))
  const {
    connectors: {connect, drag},
  } = useNode()
  const clazz = useClassNames(enabled, {empty: !children}, ['container-block', className])

  return (
    <div
      id={id}
      className={clazz}
      data-placeholder={rest['data-placeholder']}
      ref={el => el && connect(drag(el))}
      style={{
        background,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

Container.craft = {
  related: {
    settings: ContainerSettings,
  },
}
