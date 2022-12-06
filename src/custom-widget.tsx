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

import React, { ReactElement } from "react";
import { BlockAttributes } from "widget-sdk";

import './Widget.css'
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

// use @giphy/js-fetch-api to fetch gifs, instantiate with your api key
const gf = new GiphyFetch('nTvsdE0PFnmbYrdIzdGXZtXfuc2Lfsxi')

const searchTerm = 'teamwork'

// configure your fetch: fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)
const fetchGifs = (offset: number) => gf.search(searchTerm, { offset, limit: 10 })

/**
 * React Component
 */
export interface CustomWidgetProps extends BlockAttributes {
  message: string;
}

export const CustomWidget = ({ message, name, contentLanguage }: CustomWidgetProps): ReactElement => {
  return (
    <>
      {/* <p>{contentLanguage}</p> */}
      <p>Hello {message}! </p>
      <p>I'm {name}.</p>
      <Grid width={800} columns={3} fetchGifs={fetchGifs} key={searchTerm} />
    </>
  )
};
