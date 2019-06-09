import '../scss/main.scss';
import './plugins/forEach';
import run from './plugins/run';


import btn from '../../components/btn/btn';
import testvue from '../../components/testvue/testvue';

run('.js-btn', btn);
run('.js-testvue', testvue);
