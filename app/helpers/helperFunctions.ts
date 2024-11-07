export const getBreakpointItems = (breakpointData: Record<string, number>, defaultItems = 1, pageWidth = window.innerWidth): number => {
    const breakPoints = Object.keys(breakpointData).map(item => parseInt(item));

    let items = defaultItems;
    const sortedBreakPoints = breakPoints.sort((a, b) => a - b);

    sortedBreakPoints.forEach((breakPoint, index) => {
        const key = breakPoint.toString();
        if (index === sortedBreakPoints.length - 1) {
            if (pageWidth >= breakPoint) {
                items = breakpointData[key]; // No need for @ts-expect-error
            }
        } else {
            const next = sortedBreakPoints[index + 1]; // Use const since it's never reassigned

            if (index === 0) {
                if (pageWidth <= breakPoint) {
                    items = breakpointData[key]; // No need for @ts-expect-error
                } else {
                    if (pageWidth > breakPoint && pageWidth < next) {
                        items = breakpointData[breakPoint]; // No need for @ts-expect-error
                    }
                }
            } else {
                if (pageWidth > breakPoint && pageWidth < next) {
                    items = breakpointData[breakPoint]; // No need for @ts-expect-error
                }
            }
        }
    });

    return items;
}
