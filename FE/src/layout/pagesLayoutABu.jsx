import PropTypes from "prop-types";

const PagesLayoutAbu = ({ children }) => {
     return (
          <div className="bg-[#f6f6f6] px-20 md:px-100 pt-10 pb-160 md:20">
               {children}
          </div>
     );
};

PagesLayoutAbu.propTypes = {
     children: PropTypes.node.isRequired,
};

export default PagesLayoutAbu;
