import { loadModules } from "$lib/server/beginners/modules";

export async function load() {
    let modules = await loadModules();
    modules.sort((lhs, rhs) => lhs.order.valueOf() - rhs.order.valueOf());
    return { modules: modules };
}
