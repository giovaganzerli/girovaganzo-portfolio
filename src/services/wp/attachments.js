import React from 'react';
import axios from 'axios';

export function getAttachment(id) {
    return axios.get(
        `https://admin.girovaganzo.bike/wp-json/wp/v2/media?parent=${id}`,
        {
            'Content-Type': 'application/json'
        }
    )
}