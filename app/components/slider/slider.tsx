"use client";

import React, {useEffect, useMemo, useRef, useState} from "react";
import styles from "./slider.module.scss"
import {getBreakpointItems} from "@/app/helpers/helperFunctions";
// import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from "react-icons/io";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import {cloneDeep} from "lodash";

type TestimonialItem = {
    customerFeedback: string;
    customerName: string;
    customerPosition: string;
  };

type BreakPoints = Record<string, number>;

  
interface propTypes {
    // items: Record<string, any>[], // instead of object[]
    items: TestimonialItem[];
    breakPoints?: BreakPoints; // instead of object
    // items: object[],
    itemsPerSlide?: number,
    slideDuration?: number,
    infinite?: boolean,
    automatic?: boolean,
    automationWaitTime?: number,
    showArrows?: boolean,
    showDots?: boolean,
    // breakPoints?: object,
    itemSlot: (item: object) => React.ReactNode,
    nextArrowSlot?: () => React.ReactNode,
    prevArrowSlot?: () => React.ReactNode
    className?: string,
    style?: object,
    margin?: number,
    active: number,
    disableDots?: boolean,
    disableArrows?: boolean
    onActiveChange: (active: number) => void,
    disableNextBtn?: boolean,
    disablePrevBtn?: boolean,
    prevArrowClass?: string,
    nextArrowClass?: string,
    dotClass?: string,
    onAnimationPause?: (currentIndex: number, originalEvent: React.MouseEvent<HTMLDivElement>) => void,
    onAnimationPlay?: (currentIndex: number, originalEvent: React.MouseEvent<HTMLDivElement>) => void,
}

const Slider: React.FC<propTypes> = ({items,
                                         margin = 10,
                                         itemsPerSlide = 4,
                                         slideDuration = .5,
                                         infinite = false,
                                         automatic = false,
                                         automationWaitTime = 5,
                                         showArrows = true,
                                         showDots = true,
                                         breakPoints,
                                         itemSlot,
                                         nextArrowSlot,
                                         prevArrowSlot,
                                         className,
                                         style,
                                         active,
                                         onActiveChange,
                                         disableNextBtn,
                                         disablePrevBtn,
                                         onAnimationPause,
                                         onAnimationPlay,
                                         nextArrowClass,
                                         prevArrowClass,
                                         dotClass
                                     }) => {

    // const currentItemsPerSlide: number = useMemo(() => {
    //     if (breakPoints && Object.keys(breakPoints as object).length > 0) {
    //         return getBreakpointItems(breakPoints, itemsPerSlide)
    //     }

    //     return itemsPerSlide;
    // },[ itemsPerSlide, breakPoints, window.innerWidth ])

    // const currentItemsPerSlide: number = useMemo(() => {
    //     // Check if window exists (client-side only)
    //     const width = typeof window !== 'undefined' ? window.innerWidth : 1024; // Fallback for SSR
    
    //     if (breakPoints && Object.keys(breakPoints as object).length > 0) {
    //         return getBreakpointItems(breakPoints, itemsPerSlide, width); // Pass width dynamically
    //     }
    
    //     return itemsPerSlide;
    // }, [itemsPerSlide, breakPoints]);

    const currentItemsPerSlide: number = useMemo(() => {
        // Check if window exists (client-side only)
        const width = typeof window !== 'undefined' ? window.innerWidth : 1024; // Fallback for SSR
    
        if (breakPoints && Object.keys(breakPoints).length > 0) {
            return getBreakpointItems(breakPoints as Record<string, number>, itemsPerSlide, width); // Type assertion here
        }
    
        return itemsPerSlide;
    }, [itemsPerSlide, breakPoints]);
    
     
    const isClient = typeof window !== 'undefined';

    // useEffect(() => {
    //     if (!isClient) return; // Prevent SSR issues with window

    //     onActiveChange(0);
    //     resetAnimationTimeout();
    // }, [isClient, window.innerWidth]);

    useEffect(() => {
        if (typeof window !== 'undefined') {  // Ensure this runs only in the browser
            onActiveChange(0);
            resetAnimationTimeout();
        }
    }, [isClient, onActiveChange]); 
    // useEffect(() => {

    //     onActiveChange(0);
    //     resetAnimationTimeout();

    // }, [ window.innerWidth ])


    interface sliderType {
        data: object,
        cloned: boolean,
        temp?: boolean
    }


    const [ sliderList, updateSliderList ] = useState<sliderType[]>([])

    // useEffect(() => {
    //     let sliderItems: sliderType[] = cloneDeep(items).map(item => {
    //         return { data: item, cloned: false }
    //     });


    //     if (infinite) {
    //         let missingItems = currentItemsPerSlide - (items.length % currentItemsPerSlide);
    //         if ((missingItems < currentItemsPerSlide) && (items.length > currentItemsPerSlide)) {
    //             let clonedItems = items.slice(0, missingItems).map(item => {
    //                 return { data: item, cloned: true }
    //             });

    //             sliderItems = [
    //                 ...sliderItems,
    //                 ...clonedItems
    //             ]
    //         }
    //     }

    //     updateSliderList([...sliderItems])
    // }, [ infinite, currentItemsPerSlide, items ])

useEffect(() => {
    let sliderItems: sliderType[] = cloneDeep(items).map(item => {
        return { data: item, cloned: false };
    });

    if (infinite) {
        const missingItems = currentItemsPerSlide - (items.length % currentItemsPerSlide);
        if ((missingItems < currentItemsPerSlide) && (items.length > currentItemsPerSlide)) {
            const clonedItems = items.slice(0, missingItems).map(item => {
                return { data: item, cloned: true };
            });

            sliderItems = [...sliderItems, ...clonedItems];
        }
    }

    updateSliderList([...sliderItems]);
}, [infinite, currentItemsPerSlide, items]);


    const totalSlides = useMemo(() => {
        return Math.round(items.length / currentItemsPerSlide);
    }, [ items, currentItemsPerSlide ])

    const mainSlider = useRef<HTMLDivElement | null>(null);
    const animationTimeout = useRef<number>(0);
    const sliderTimeout = useRef<number>(0);



    const [ sliderWidth, updateSliderWidth ] = useState(0);
    const [ shouldTransition, updateShouldTransition ] = useState<boolean>(true);

    const itemWidth = useMemo(() => {
            return (sliderWidth / currentItemsPerSlide) - (margin * 2);
    }, [ sliderWidth, currentItemsPerSlide, margin ])

    useEffect(() => {
        const sliderEl = mainSlider.current;
        // if (!sliderEl) {
        //     return
        // }
        if (!sliderEl) return;
        updateSliderWidth(sliderEl.clientWidth)


        const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                if (entry.contentBoxSize) {
                    // console.log({ entry })
                    updateSliderWidth(entry.contentRect.width)
                }
            }
        })

        resizeObserver.observe(sliderEl);

        return () => {
            if (sliderEl)
                resizeObserver.unobserve(sliderEl)
        }
    },[])
// }, [mainSlider.current])

    useEffect(() => {
        if (automatic) {
            waitForAutoSlide()
        }
    }, [automatic, active])


    const translatePosition = useMemo(() => {
        let position: number = active * sliderWidth;
        if (active >= totalSlides) {
            position = totalSlides * sliderWidth;
        }
        return position
    }, [ totalSlides, sliderWidth, active ])

    const resetAnimationTimeout = () => {
        window.clearTimeout(animationTimeout.current)
    }

    const resetSlideTimeout = () => {
        window.clearTimeout(sliderTimeout.current)
    }

    const waitForAutoSlide = () => {
        if (!automatic) { return }

        resetAnimationTimeout();
        animationTimeout.current = window.setTimeout(() => {

            moveToNextSlide();
        }, automationWaitTime * 1000)
    }
    const moveToSlide = async (index: number) : Promise<void> => {
        return await new Promise(resolve => {
          /*
            if (index < 0 || index > totalSlides) {
                resolve();
                return
            }
           */
            resetAnimationTimeout();
            resetSlideTimeout();
            updateShouldTransition(true)
            onActiveChange(index);

            sliderTimeout.current = window.setTimeout(() => {
                resetSlideTimeout();
                resolve();
            }, slideDuration * 1000);
        })
    }


    const moveToNextSlide = (event?: React.MouseEvent<HTMLButtonElement>) => {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        // console.log({ next: active + 1, totalSlides })
        let addedTempSlides: boolean = false;
        if (active + 1 >= totalSlides) {
            if (!infinite) {
                return
            } else {
                if (items.length <= currentItemsPerSlide) {
                    return
                }
                const tempSlides = sliderList.slice(0, currentItemsPerSlide).map(item => {
                    return { ...item, temp: true }
                })

                const updatedList = cloneDeep([
                    ...sliderList,
                    ...tempSlides
                ])
                addedTempSlides = true;
                updateSliderList(updatedList)
            }
        }

        moveToSlide(active + 1).then(() => {

            if (addedTempSlides) {
                updateShouldTransition(false);
                onActiveChange(0);
                updateSliderList([...sliderList].filter(item => !item.temp))

                setTimeout(() => {
                    updateShouldTransition(true);
                }, 50)
            }

        })
    }

    const moveToPreviousSlide = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();
        let addedTempSlides = false;
        let prevIndex = active - 1;
        let timeout = 0;
        if (prevIndex < 0) {
            if (!infinite) { return }
            const sliceStart = sliderList.length - currentItemsPerSlide
            const tempSlides = sliderList.slice(sliceStart, sliderList.length).map(item => {
                return { ...item, temp: true }
            })

            const updatedList = cloneDeep([
                ...tempSlides,
                ...sliderList

            ])
            addedTempSlides = true;
            updateSliderList(updatedList)
            updateShouldTransition(false);
            onActiveChange(1);
            prevIndex = 0;
            timeout = 50;


        }

        setTimeout(() => {
            moveToSlide(prevIndex).then(() => {

                if (addedTempSlides) {
                    updateShouldTransition(false);
                    onActiveChange(totalSlides - 1);
                    updateSliderList([...sliderList].filter(item => !item.temp))

                    setTimeout(() => {
                        updateShouldTransition(true);
                    }, 100)
                }
            })
        }, timeout)
    }

    const initDisablePrev: boolean = useMemo(() => {
        if (infinite) {
            return false
        }
        return active === 0
    }, [ infinite, active ])

    const initDisableNext: boolean = useMemo(() => {
        if (infinite) {
            return false
        }
        return active === totalSlides
    }, [ infinite, active, totalSlides])

    const switchSlides = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
        event.preventDefault();
        event.stopPropagation();

        onActiveChange(index);
    }

    const detectMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
        if (automatic) {
            if (onAnimationPause) {
                onAnimationPause(active, event)
            }
            resetAnimationTimeout();
        }
    }

    const detectMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
        if (automatic) {
            if (onAnimationPlay) {
                onAnimationPlay(active, event)
            }
            waitForAutoSlide();
        }
    }
    const transitionKey = `--x-slide-transition-duration`

    return <div ref={el => { mainSlider.current = el; }}
                className={`${styles.xSlider}${ className ? " " + className : ""}`}
                style={style ? style : {}}
    >
        <div onMouseEnter={(event) => detectMouseEnter(event)}
             onMouseLeave={(event) => detectMouseLeave(event)}
             className={`${styles.xContainer}`}
        >
            {
                showArrows && items.length > currentItemsPerSlide ? <div className={`${styles.xControls}`}>
                    <button disabled={ initDisablePrev || disablePrevBtn } onClick={(event) => moveToPreviousSlide(event)}
                            className={`${styles.xPrevBtn}${ prevArrowClass ? " " + prevArrowClass : ""}`}>
                        {
                            prevArrowSlot ? prevArrowSlot() :  <FaArrowLeftLong/>
                        }
                    </button>
                    <button disabled={ initDisableNext || disableNextBtn } onClick={(event) => moveToNextSlide(event)}
                            className={`${styles.xNextBtn}${ nextArrowClass ? " " + nextArrowClass : ""}`}>
                        {
                            nextArrowSlot ? nextArrowSlot() : <FaArrowRightLong/>
                        }
                    </button>
                </div> : <></>
            }
            <div className={`${styles.xMain}`}>
                <div style={{
                        transform: `translateX(-${translatePosition}px)`,
                        transition: `${ shouldTransition ? `ease ${ slideDuration }s` : 'none'}`
                }} className={`${styles.xSlideshow}`}>
                    {
                        sliderList.map((item, index) => {
                            return <div style={{
                                            margin: `0 ${margin}px`,
                                            width: `${itemWidth}px`
                                        }}
                            className={`${styles.xSliderItem} ${item.temp ? 'temp-slide' : ''}`}
                                        key={index}

                            >
                                { itemSlot(item.data) }
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
        {
          showDots ? (
            <div className={styles.xDots}>
                {
                    new Array(totalSlides).fill("").map((item, index) => {
                        const dotStyle: React.CSSProperties & { [key: string]: string } = {
                            [transitionKey]: `${slideDuration / 2}s`,
                        };
        
                        return (
                            <div 
                                style={dotStyle}
                                className={`${styles.dot}${dotClass ? " " + dotClass : ""}${index === active ? " " + styles.active : ""}`}
                                onClick={event => switchSlides(event, index)}
                                key={index}
                            >
                            </div>
                        );
                    })
                }
            </div>
        ) : <></>
        }
    </div>
}

export default Slider
