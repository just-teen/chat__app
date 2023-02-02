import { async } from '@firebase/util'
import { collection, serverTimestamp, addDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import {auth,db} from '../firebase'

const SendMessage = ({scroll}) => {
   
    const[input, setInput] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault()
        if(input === ''){
            alert ('Please enter a message!')
            return
        }
        const {uid, displayName} = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text : input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setInput('')
        scroll.current.scrollIntoView({behavior: 'smooth'})
    }

  return (
    <form onSubmit={sendMessage} className='h-14 w-full max-w-[728px] flex text-xl absolute bottom-0'>
        <input value={input}
        onChange={(e) => setInput(e.target.value)} 
        className='w-full text-sm p-3 bg-gray-900 text-white outline-none border-none rounded-bl-xl'
        type="text"
        placeholder='Type your message...' />

        <button className='w-[20%] bg-teal-500 text-white rounded-br-xl' type="submit">Send</button>
    </form>
  )
}

export default SendMessage