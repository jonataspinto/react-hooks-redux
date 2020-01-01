import React, { useEffect, useState } from 'react'
import { HomeContainer, Content, Pagination } from './HomeStyled.js'
import { useSelector, useDispatch } from 'react-redux'
import { getAll } from '../../store/user/user.actions'
import { 
    Card, 
    Button 
}from '../../components'
import { CircularProgress } from '@material-ui/core';

export default function Home() {
    const userStore = useSelector(state => state.users)
    const { users, totalPages, loading } = userStore
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)    
    
    useEffect(()=>{        
        getUsers(page)         
    },[page])

    const getUsers = (page) =>{
        dispatch(getAll(page))          
    }

    const nextPage = ()=>{
        page < totalPages && setPage(page + 1)
    }

    const prevPage = ()=>{        
        page > 1 && setPage(page - 1)
    }    

  return (
    <HomeContainer >
        <Content>{ 
            (loading ? <CircularProgress/> :  
            users && users.map(user=>{
                return(                
                <Card
                    key={user.id}
                    title={`${user.first_name} ${user.last_name}`}
                    email={user.email}
                    src={user.avatar}
                />)
            }))
        }</Content>
        <Pagination>
            <Button 
                variant='contained'
                colors={page !== 1 ? {a:'black', b:'black'}: ''}
                color='primary' 
                value='prev' 
                action={()=> prevPage()}
                disabled={page === 1 && true}
            />

            <Button 
                variant='contained'
                colors={page !== totalPages ? {a:'black', b:'black'}: ''}
                color='primary' 
                value='next' 
                action={()=> nextPage()}
                disabled={page === totalPages && true}
            />
        </Pagination>
    </HomeContainer>
  );
}