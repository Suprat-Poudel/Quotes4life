import React from 'react'
import { useEffect } from 'react';
import QuoteForm from '../quotes/QuoteForm'
import { useHistory } from 'react-router-dom'
import useHttp from '../../hooks/use-http';
import {addQuote} from '../../lib/api'

function NewQuotes() {
    const {sendRequest, status}=useHttp(addQuote)
   const history= useHistory();
   useEffect(()=>{
    if(status==='completed'){
        history.push('/quotes')
    }
},[status, history])
   function onAddQuoteHandler(quoteData)
    {
        sendRequest(quoteData)
        console.log(quoteData)
    
       
    };
    return (
        <div>
            <QuoteForm isLoading={status==="pending"}onAddQuote={onAddQuoteHandler}></QuoteForm>
        </div>
    )
}

export default NewQuotes
