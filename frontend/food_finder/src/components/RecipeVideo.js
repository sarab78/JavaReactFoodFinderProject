import React from 'react'

const RecipeVideo = (props) => {

  function videoId(){
    const videoId = props.selectedRecipe.strYoutube
    return videoId.slice(32)
  }

  return(
    <div
         className="recipe-video-iframe"
         style={{
           position: "relative",
           paddingBottom: "56.25%" /* 16:9 */,
           paddingTop: 25,
           height: 0
         }}
       >
         <iframe
           style={{
             position: "absolute",
             top: 0,
             left: 0,
             width: "100%",
             height: "100%"
           }}
           src={`https://www.youtube.com/embed/${videoId()}`}
           frameBorder="0"
         />
       </div>
  )

}

export default RecipeVideo
