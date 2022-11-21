import { recoilPersist } from 'recoil-persist';
import { atom } from 'recoil';

const {persistAtom} = recoilPersist({
    key: 'beer',
    storage: localStorage
})

export class BeerRecoilPersist {
   public static  myBeers= atom({key: 'myBeers', default: [], effects_UNSTABLE: [persistAtom]});
}
