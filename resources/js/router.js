
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from './components/Home'
import About from './components/About'
import Admin from './components/Admin'
import StudentsData from './components/StudentsData'
import StudentsBalance from './components/StudentsBalance'
import Rooms from './components/RoomAvailability'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/students_data',
            name: 'students data',
            component: StudentsData
        },
        {
            path: '/students_balance',
            name: 'students balance',
            component: StudentsBalance
        },
        {
            path: '/room_checker',
            name: 'room checker',
            component: Rooms
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin
        },
    ],
});
