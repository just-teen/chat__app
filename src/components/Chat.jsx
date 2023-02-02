import { onSnapshot, orderBy, QuerySnapshot } from 'firebase/firestore'
import React, {useEffect,useState,useRef} from 'react'
import Message from './Message'
import { db } from '../firebase' 
import {query,collection} from 'firebase/firestore'
import SendMessage from './SendMessage'

const Chat = () => {
    const [messages, setMessages] = useState([])
    const scroll = useRef()

    useEffect (()=>{
        const q = query(collection(db, 'messages'), orderBy('timestamp'))
        const unsubscribe = onSnapshot(q, (QuerySnapshot) =>{
            let messages = []
            QuerySnapshot.forEach((doc)=>{
                messages.push({...doc.data(), id: doc.id})
            })
            setMessages(messages)
        })
        return ()=> unsubscribe()
    })

  return (
    <>
    <main className='flex flex-col p-[10px] relative'>

        {messages &&
        messages.map((message)=>(
            <Message key={message.id} message={message}/>
        ))}
    </main>
        <SendMessage scroll={scroll}/>
        <span ref={scroll}></span>
    </>
  )
}

export default Chat