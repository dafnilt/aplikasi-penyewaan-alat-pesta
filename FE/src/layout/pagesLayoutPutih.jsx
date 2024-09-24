import PropTypes from "prop-types";

const PagesLayoutPutih = ({ children }) => {
     return (
          <div className="px-20 md:px-100 pt-10 pb-160 md:20">{children}</div>
     );
};

PagesLayoutPutih.propTypes = {
     children: PropTypes.node.isRequired,
};

export default PagesLayoutPutih;
