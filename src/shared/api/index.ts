import Pocketbase from 'pocketbase'
import {POCKETBASE_URL} from "@/shared/config";

const pb = new Pocketbase(POCKETBASE_URL)

export default pb