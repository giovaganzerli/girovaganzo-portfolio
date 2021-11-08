import React from 'react';
import axios from 'axios';

// POSTS CATEGORIES

export function getPostsCategories(params) {
    return axios.get(
        `https://admin.girovaganzo.bike/wp-json/wp/v2/categories${params}`,
        {
            'Content-Type': 'application/json'
        }
    )
}

export function getPostsCategory(id) {
    return axios.get(
        `https://admin.girovaganzo.bike/wp-json/wp/v2/categories/${id}`,
        {
            'Content-Type': 'application/json'
        }
    )
}

// WORKS CATEGORIES

export function getWorksCategories(params) {
    return axios.get(
        `https://admin.girovaganzo.bike/wp-json/wp/v2/category_works${params}`,
        {
            'Content-Type': 'application/json'
        }
    )
}

export function getWorksCategory(id) {
    return axios.get(
        `https://admin.girovaganzo.bike/wp-json/wp/v2/category_works/${id}`,
        {
            'Content-Type': 'application/json'
        }
    )
}