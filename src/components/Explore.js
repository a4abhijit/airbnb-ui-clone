import styled from "styled-components";
import places from "../data";

export default function Explore() {
  return (
    <ExploreSection>
      <h2>Explore nearby</h2>
      <div className="items">
        {places.map((item, index) => (
          <div key={index} className="item">
            <div className="img">
              <img
                width={80}
                height={60}
                alt={item.name}
                src={`/images/explore/${index + 1}.jpg`}
              />
            </div>
            <span>
              <h3>{item.name}</h3>
              <p>{item.time}-hour drive</p>
            </span>
          </div>
        ))}
      </div>
    </ExploreSection>
  );
}

const ExploreSection = styled.section`
  .items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 0.5rem;
    margin-bottom: -1.5rem;
    padding: 1.5rem 0;
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      display: none;
    }
  }
  .item {
    display: flex;
    align-items: center;
    border-radius: 1rem;
    transition: all 0.2s;
    cursor: pointer;
    span {
      padding: 0 1.0rem;
      white-space: nowrap;
      transition: padding 0.2s;
    }
    .img {
      position: relative;
      width: 5rem;
      height: 5rem;
      padding: 1.0rem 0 0.5rem 0;
      img {
        border-radius: 1rem;
        transition: transform 0.2s;
        width: 100%;
      }
      & > div:first-child {
        position: absolute;
        overflow: visible;
        width: 80%;
      }
      & > div {
        width: 100%;
      }
      img.shadow {
        filter: blur(0.5rem) brightness(80%);
        transform: translateY(0.25rem) scaleX(0.9);
        z-index: -1;
        opacity: 0.6;
      }
    }
    &:hover {
      background: var(--white);
      box-shadow: 0 0.25rem 0.5rem #48484810;

      img.shadow {
        transform: translateY(0) scale(0);
      }
      img {
        transform: scale(0.90);
      }
      span {
        padding: 0 2.0rem 0 0.5rem;
      }
    }
  }
  @media (max-width: 36rem) {
    .items {
      grid-template-columns: repeat(4, 1fr);
      overflow: scroll;
      margin: 0 -1.1rem -1.1rem -1.1rem;
      padding: 1.2rem;
      scroll-snap-type: x mandatory;
      scroll-padding-left: 1.1rem;
    }
    .item {
      scroll-snap-align: start;
    }
    .item:last-of-type {
      margin-right: 4rem;
    }
  }
`;
