import { v4 as uuidv4 } from 'uuid';
import { Beer } from '../../../models/Beer';

export class BeerUtils {
    public static upsertBeer(beers: Array<Beer>, beer: Beer): Array<Beer> {
        // send save or update api request and update with returned value.
        // for now, let's store in local state
        const cloned = [...beers];
        console.log("EDITABLE UP",cloned,beer);
        if (beer.id) {
            // update existing beer on update
            const index = cloned.findIndex((item) => item.id === beer.id);
            if (index > -1) {
                cloned[index] = beer;
            }
        } else {
            // add
            beer.id = uuidv4();
            cloned.push(beer);
        }
        console.log("EDITABLE",cloned);
        return cloned;
    }

    public static removeBeer(beers: Array<Beer>, id: string) {
        return beers.filter((b) => b.id !== id);
    }
}
