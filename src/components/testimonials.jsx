export const Testimonials = (props) => {
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>How to stake</h2>
        </div>
        <div className='row'>
          {props.data
            ? <iframe title="How to Stake my ADA" width="570" height="360" src="https://www.youtube.com/embed/Cs_stEnEvpg" frameborder="0" allow="encrypted-media;" allowfullscreen=""></iframe>
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
