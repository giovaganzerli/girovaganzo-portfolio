import React from 'react';
import axios from 'axios';

export function getPosts(params) {
    return axios.get(
        `https://admin.girovaganzo.bike/wp-json/wp/v2/posts${params}`,
        {
            'Content-Type': 'application/json'
        }
    )
}

export function getPost(id) {
    return axios.get(
        `https://admin.girovaganzo.bike/wp-json/wp/v2/post/${id}`,
        {
            'Content-Type': 'application/json'
        }
    )
}