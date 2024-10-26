import PropTypes from 'prop-types';

const Banner = ({ increaseCoins }) => {
  return (
    <div className='px-28'>
      <div className="flex flex-col justify-center items-center gap-4 text-center py-24 bg-cover bg-no-repeat text-white bg-[#000000] rounded-3xl" style={{ backgroundImage: 'url(assets/bg-shadow.png)' }}>
        <img className='mx-auto mb-7 w-72' src="/assets/banner-main.png" alt=""/>
        <h2 className='text-5xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
        <p className='text-lg text-slate-200'>Beyond Boundaries Beyond Limits</p>
        <button className='bg-[#fee529] text-black font-bold w-48 rounded-xl hover:bg-slate-600 hover:text-slate-200 h-12' onClick={increaseCoins}>Claim Free Credit</button>
      </div>
    </div>
  );
};

Banner.propTypes = {
  increaseCoins: PropTypes.func.isRequired,
};

export default Banner;
