import React from 'react';
import axios from 'axios';

// POSTS

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

// WORKS

export function getWorks(params) {
    return axios.get(
        `https://admin.girovaganzo.bike/wp-json/wp/v2/works${params}`,
        {
            'Content-Type': 'application/json'
        }
    )
}

export function getWork(id) {
    return axios.get(
        `https://admin.girovaganzo.bike/wp-json/wp/v2/works/${id}`,
        {
            'Content-Type': 'application/json'
        }
    )
}