import React from 'react'
import HeaderCom from "@components/Header";
function Search() {
  function searchFn(){
console.log('234')
  }
  return (
    <div>
      <HeaderCom rightContent="取消">
        <div className="flex flex-1 pd10 pl0-i" style={{height:'100%'}}>
           <input style={{background:'rgba(243,244,246,1'}} className="flex flex-1 pl10 pr10" onInput={searchFn} placeholder="搜索用户" type="search"></input>
        </div>

      </HeaderCom>

    </div>
  )
}

export default Search
