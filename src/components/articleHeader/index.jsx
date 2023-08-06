import "./articleHeader.css";

export default function ArticleHeader() {
  return (
    <div className="ar_header_container">
      <div className="header_content content_1">
        <img
          src="/logo.svg"
          alt="logo"
          className="header_logo"
        />
      </div>
      <div className="header_content content_2">
        <h1>देशहित</h1>
      </div>
      <div className="header_content content_3">
        <h1>धर्महित</h1>
      </div>
      <div className="header_content content_4">
        <h1>जनहित</h1>
      </div>
      <div className="header_content header_right_content">
        <div className="right_content search_div">
          <img
            src="/loupe.svg"
            alt="search-icon"
            className="search_icon"
          />
          <input placeholder="search" className="search_field" />
        </div>
        <div className="right_content">
          <img
            src="/avatar.svg"
            alt="user_icon"
            className="user_icon"
          />
        </div>
      </div>
    </div>
  );
}
