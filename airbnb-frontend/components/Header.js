import styled from "styled-components";
import { Input, Icon } from "antd";

const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto auto auto auto;
  grid-gap: 10px;
  height: 80px;
  background: #fff;
  align-items: center;
  border-bottom: 1px solid rgb(228, 228, 228);
  position: fixed;
  width: 100vw;

  .logo {
    cursor: pointer;
    display: flex;
    justify-content: center;
    width: 80px;
    padding-left: 10px;
    img {
      width: 28.5px;
      height: 30px;
    }
  }

  .search {
    max-width: 50rem;
  }
`;

const HeaderLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 100%;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-top: 2px;

  &:last-child {
    margin-right: 2rem;
  }

  &:hover {
    border-bottom: 2px solid ${props => props.theme.textColor};
  }
`;

const Header = () => (
  <HeaderWrapper>
    <div className="logo">
      <img
        src="https://seeklogo.com/images/A/airbnb-logo-1D03C48906-seeklogo.com.png"
        alt="logo"
      />
    </div>
    <div className="search">
      <Input
        style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.1" }}
        size="large"
        placeholder="Try “Tokyo”"
        spellCheck="false"
        autoComplete="off"
        prefix={<Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />}
      />
    </div>
    <HeaderLink>Become a host</HeaderLink>
    <HeaderLink>Help</HeaderLink>
    <HeaderLink>Sign up</HeaderLink>
    <HeaderLink>Log in</HeaderLink>
  </HeaderWrapper>
);

export default Header;
