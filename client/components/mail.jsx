import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Mail() {
    const nameContainer = useRef()
    const mailContainer = useRef()
    const messageContainer = useRef()
    const subjectContainer = useRef()
    const spin = <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
    const [load, setLoad] = useState()
    function HandleSubmit(e) {
        e.preventDefault()
        setLoad(spin)
        var name = nameContainer.current.value
        var email = mailContainer.current.value
        var message = messageContainer.current.value
        var subject = subjectContainer.current.value
        fetch("http://localhost:8080/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message, subject })
        }
        )
            .then(function (response) {
                return response.json()
            }
            ).then(function (data) {
                if (data.info === "success") {
                    nameContainer.current.value = " "
                    mailContainer.current.value = " "
                    messageContainer.current.value = " "
                    subjectContainer.current.value = " "
                    alert(`Hey ${name}, your message has been delivered successfully`)
                } else {
                    alert(`An error occured, check your internet connection`)
                }
                setLoad("")
            })
            .catch((error) => {
                console.log(error)
                alert('An error occured, check your internet connection and try again')
                setLoad("")
            });

    }

    useEffect(() => {
        Aos.init()
    })
    return (
        <form
            data-aos="fade-left"
            data-aos-duration="1500"
            className="bg-slate-500 px-5 my-10 flex flex-col py-10 rounded-2xl mx-auto lg:w-8/12 h-fit " onSubmit={HandleSubmit}>
            <div className='md:grid grid-cols-2 gap-10'>
                <div>
                    <label className="text-lg">Name</label>
                    <input
                        className="text-textcolor bg-[#ebeef0] outline-none rounded-md block p-3 my-3 w-full"
                        required
                        type="text"
                        ref={nameContainer}
                    />
                </div>
                <div>
                    <label className="text-lg">Email</label>
                    <input
                        className="text-textcolor bg-[#ebeef0] outline-none rounded-md block p-3 my-3 w-full "
                        required
                        type="email"
                        ref={mailContainer}
                    />
                </div>
                <div>
                    <label className="text-lg">Subject</label>
                    <input
                        className="text-textcolor bg-[#ebeef0] outline-none rounded-md block p-3 my-3 w-full "
                        required
                        type="text"
                        ref={subjectContainer}
                    />
                </div>
                <div>
                    <label className="text-lg">Message</label>
                    <textarea
                        className="text-textcolor bg-[#ebeef0] outline-none rounded-md block p-4 my-3 w-full"
                        required
                        type="text"
                        ref={messageContainer}
                    />
                </div>
            </div>
            <button className="bg-slate-700 self-center font-semibold text-white px-16 py-3 mt-5 w-8/12 rounded-2xl">
                {load} &nbsp;Send
            </button>
        </form>
    )
}

export default Mail