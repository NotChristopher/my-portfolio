import {Dropdown} from 'react-bootstrap';
import styled from 'styled-components';

const StyledDropdown = styled(Dropdown)`
  display: inline-block;
  font-family: ${({theme})=>theme.secondary_font};
  height: 2.5rem;

  @media(${({theme})=>theme.media_sm}){
    height: 2.5rem;
  }
  @media(${({theme})=>theme.media_md}){
    height: 3rem;
  }

  @media(${({theme})=>theme.media_xl}){
      height: 3.5rem;
    }
  
  &.show {
    .dropdown-toggle::after {
      -webkit-transform: scaleY(-1);
      transform: scaleY(-1);
    }

    .btn {
      background: none;
    }
  }
  
  & > .btn {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    align-items: center;
    min-width: 9.125rem;
    background: none;
    border-radius: 0.5rem;
    color: ${({theme}) => theme.neutral_w};
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.125rem;
    height: 2.5rem;

    @media(${({theme})=>theme.media_sm}){

      height: 2.5rem;
    }

    @media(${({theme})=>theme.media_md}){
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.25rem;
      height: 3rem;
    }
    
    @media(${({theme})=>theme.media_xl}){
      height: 3.5rem;
    }
    &-sm {
      min-width: 12rem;
    }
    &-lg {
      min-width: 18.25rem;
    }

    &-primary {
      border-color: ${({theme}) => theme.accent1_15};

      &:hover, &:active, &:focus, &:focus-within {
        border-color: ${({theme}) => theme.accent1_40};
        color: ${({theme}) => theme.neutral_w} !important;
      }
      &:disabled {
        background-color: transparent;
        border-color: ${({theme}) => theme.neutral_40};
        color: ${({theme}) => theme.neutral_40};
        cursor: not-allowed;
      }
    }
    &-light {
      border-color: ${({theme}) => theme.neutral_05};

      &:hover, &:active, &:focus, &:focus-within {
        border-color: ${({theme}) => theme.neutral_20};
        color: ${({theme}) => theme.neutral_w};
      }
    }
  }
  
  .dropdown-menu {
    padding:0;
    background-color: ${({theme}) => theme.primary_80};
    border-radius: 0.5rem;
    /* width: 100%; */
    min-width: 100%;
    z-index: 10000;
    
    .dropdown-item {
      color: ${({theme}) => theme.neutral_w};
      padding: 0.6875rem 0.5rem;
      font-family: ${({theme}) => theme.secondary_font};
      font-weight: 300;
      font-size: 0.875rem;
      line-height: 1.125rem;
      height: 2.25rem;

      @media(${({theme})=>theme.media_md}){
        padding: 0.5rem 1rem 1rem 1rem;
        font-size: 1rem;
        line-height: 1.75rem;
        height: 2.5rem;
      }

      @media(${({theme})=>theme.media_xl}){
        line-height: 2rem;
        height: 3rem;
      }
      &.disabled {
        color: ${({theme}) => theme.neutral_40};
      }
      &.active {
        background-color: ${({theme}) => theme.accent1_50};
        font-weight: 300;
        font-size: 0.875rem;
        line-height: 1.125rem;
        height: 2.25rem;
        @media(${({theme})=>theme.media_md}){
          font-size: 1rem;
          line-height: 1.75rem;
          height: 2.5rem;
        }
        @media(${({theme})=>theme.media_xl}){
          height: 3rem;
        }
      }

      &:hover, &:focus, &:focus-within {
        background-color: ${({theme}) => theme.accent1_20};
        font-weight: 300;
        font-size: 0.875rem;
        line-height: 1.125rem;
        @media(${({theme})=>theme.media_md}){
          font-size: 1rem;
          line-height: 2rem;
          height: 2.5rem;
        }
        @media(${({theme})=>theme.media_xl}){
          height: 3rem;
        }
      }
      &:first-child {
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
      }
      &:last-child {
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
      }
    }
    .dropdown-divider {
      border-top: 1px solid ${({theme}) => theme.accent1_15};
      margin: 0.3125rem 0.625rem;
      opacity: 1;
    }
  }

`;

export default StyledDropdown;
