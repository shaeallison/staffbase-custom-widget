import React, { useEffect } from 'react';

import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

const gf = new GiphyFetch('nTvsdE0PFnmbYrdIzdGXZtXfuc2Lfsxi')

const GiphySearch = (props: any) => {
  const {searchTerm} = props

  useEffect(() => {
  }, [searchTerm]);

  return (
    <Grid
      width={800}
      columns={3}
      fetchGifs={(offset: number) => gf.search(searchTerm, { offset, limit: 10 })}
      key={searchTerm}
    />
  )
}

export default GiphySearch
