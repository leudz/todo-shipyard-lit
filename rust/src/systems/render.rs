use shipyard::*;
use crate::components::*;
use crate::dom;


#[system(ItemList)]
pub fn run (item_lists:&crate::components::ItemList, items:&Item, dirties:&Dirty) {
    if let Some((_item_list, _dirty)) = (item_lists, dirties).iter().next() {
        let data:Vec<&str> = items.iter().map(|item| item.0.as_ref()).collect();
        dom::todo::replace_items(&data).unwrap();
    }
}

#[system(ItemsUpdate)]
pub fn run (_items:&Item, _dirty:&Dirty) {
    //let data:Vec<&str> = items.iter().map(|x| x.0.as_ref()).collect();
    /*
    for item in items.iter() {
        //log::info!("in system! {}", item.0)
    }
    */
}

#[system(ClearDirty)]
pub fn run (mut dirties:&mut Dirty) {
    let entity_ids:Vec<Key> = 
        (&dirties)
            .iter()
            .with_id()
            .map(|(id, _)| id)
            .collect();

    for id in entity_ids {
        Remove::<(Dirty,)>::remove((&mut dirties,), id);
    }
}