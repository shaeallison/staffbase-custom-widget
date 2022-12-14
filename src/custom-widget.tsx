/*!
 * Copyright 2020, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { ReactElement, useState } from "react";
import { BlockAttributes } from "widget-sdk";
import GiphySearch from "./GiphySearch";

import './Widget.css'

/**
 * React Component
 */
export interface CustomWidgetProps extends BlockAttributes {
  message: string;
}

export const CustomWidget = ({ message, name }: CustomWidgetProps): ReactElement => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e: Event) => {
    e.preventDefault()
  }

  const handleChange = (e: Event) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  return (
    <>
      <p>Hello {message}! </p>
      <p>I'm {name}.</p>
      <form className="giphy-form" onSubmit={handleSubmit}>
        <label htmlFor="search">Search for a GIF</label>
        <input id="search" name="search" type="text" onChange={handleChange}/>
      </form>
      <GiphySearch searchTerm={search}/>
    </>
  )
};
