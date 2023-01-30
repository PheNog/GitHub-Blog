import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout'
import { HomeBlog } from './pages/HomeBlog'
import { Post } from './pages/Post'


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />} >
                <Route path="/" element={<HomeBlog />} />
                <Route path="/post/:id" element={<Post />} />
            </Route>
        </Routes>
    )
}