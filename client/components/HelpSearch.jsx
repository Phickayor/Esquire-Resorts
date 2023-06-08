import React, { useEffect, useRef, useState } from 'react'

function HelpSearch(props) {
    // const keywords = ["room", "ipsum", "hotel", "book", "address", "food", "reservation", "bar"]
    const questionAndAnswers = props.answers
    const searchTerm = useRef(null)
    const finalDiv = useRef(null)
    const [searchNum, setSearchNum] = useState(null)
    const [finalResult, setFinalResult] = useState(null)
    var resultsArray = []
    var questionsToArray = []
    var answersToArray = []

    function FindSearch(event) {
        setSearchNum("(0)")
        var searchedItem = searchTerm.current.value

        //Splitting the searched item into an array
        var searchArray = searchedItem.split(" ")
        searchArray.map((eachWord) => {
            for (var i = 0; i < questionAndAnswers.length; i++) {
                // splitting all questions & answers to array
                questionAndAnswers.map((questionAndAnswer) => {
                    questionsToArray.push(questionAndAnswer.question.split(" "))
                    answersToArray.push(questionAndAnswer.answer.split(" "))
                })
                //checking if searched word is in question or answer array
                if ((questionsToArray.indexOf(eachWord)) != -1 || (answersToArray.indexOf(eachWord)) != -1) {
                    //Saving found question to a variable
                    var resultDetails = {
                        searchQuestion: questionAndAnswers[i].question,
                        searchAnswer: questionAndAnswers[i].answer
                    }
                    //Pushing result to array
                    if (resultsArray.indexOf(resultDetails) === -1) {
                        resultsArray.push(resultDetails)
                    } else { }
                    //creating format to display items in the resuts array and saving it in a variable
                    var resultDisplay = resultsArray.map((result, index) => (
                        <div key={index} className=" bg-slate-700  rounded-2xl p-5 space-y-2 shadow-2xl">
                            <h1 className='text-white font-bold text-2xl'>{result.searchQuestion}</h1>
                            <p className='text-white text-md lg:text-lg'>{result.searchAnswer}</p>
                        </div>
                    ))
                    //Saving result to state
                    setSearchNum("(" + resultsArray.length + ")")
                    setFinalResult(resultDisplay)
                }
                else if (searchNum === "(0)") {
                    setFinalResult("No Results Found")

                }
            }
        })
    }



    return (
        <div className="text-slate-700 mt-10">
            <h1 className='text-3xl font-mono font-semibold text-center'>Esquire Resorts</h1>
            <input type="search" placeholder="What can we help you with..." ref={searchTerm} onChange={FindSearch} className="text-lg border-purple-500 border-2 md:text-center my-5 focus:outline-none rounded-2xl p-6 w-full" />
            <div className='my-10'>
                <h1 className='text-2xl font-semibold my-5' >Search Result {searchNum}</h1>
                <div className='space-y-10' ref={finalDiv}>{finalResult}</div>
            </div>
        </div>
    )
}

export default HelpSearch