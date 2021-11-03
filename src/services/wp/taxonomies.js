import React from 'react';
import axios from 'axios';

export function getCategories(params) {
    return axios.get(
        `https://admin.girovaganzo.bike/wp-json/wp/v2/categories${params}`,
        {
            'Content-Type': 'application/json'
        }
    )
}

export function getCategory(id) {
    return axios.get(
        `https://admin.girovaganzo.bike/wp-json/wp/v2/categories/${id}`,
        {
            'Content-Type': 'application/json'
        }
    )
}