import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './Edit';
import save from './save';

registerBlockType(metadata.name, {
  icon: 'list-view',
  edit: Edit,
  save,
});
