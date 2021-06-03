import React from 'react'
import { Helmet } from 'react-helmet'

const Head = ({ title }) => {
    return (
        <Helmet 
        htmlAttributes={{
            lang: 'en-us'
        }}
        meta={[
            {
                name: 'description',
                content: `${title} | Jivin Mazumder's Blog`
            }
        ]}
        defer={false}
        title={`${title} | Jivin Mazumder`} 
        />
    )
}

export default Head