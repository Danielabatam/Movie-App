import React, {ReactNode} from 'react';

export interface CustomComponentsProps {
    children?:ReactNode
    className?:string
}

export interface Season {
    id: number
}

export interface Film {
    id: number,
    title?: string
    description?: string
    posterPath?: string
    coverPath?: string
    genreIds?: number[]
    seasons?: Season[]
}