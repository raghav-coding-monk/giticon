//import PropType from 'prop-types'
function Card({children, reverse}){
   // return <div className={`card ${reverse && 'reverse'} ` }>{children}</div>

   return<div className="card" style={{
    backgroundColor: reverse ? ' black':'white',
    color: reverse? 'white' :'black',
   }}>
    {children}
    </div>
}
export default Card