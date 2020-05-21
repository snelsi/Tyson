// Generated from src/Tyson/Tyson.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { UnaryMinusExpressionContext } from "./TysonParser";
import { NotExpressionContext } from "./TysonParser";
import { PowerExpressionContext } from "./TysonParser";
import { MultExpressionContext } from "./TysonParser";
import { AddExpressionContext } from "./TysonParser";
import { CompExpressionContext } from "./TysonParser";
import { EqExpressionContext } from "./TysonParser";
import { AndExpressionContext } from "./TysonParser";
import { OrExpressionContext } from "./TysonParser";
import { TernaryExpressionContext } from "./TysonParser";
import { InExpressionContext } from "./TysonParser";
import { NumberExpressionContext } from "./TysonParser";
import { BoolExpressionContext } from "./TysonParser";
import { NullExpressionContext } from "./TysonParser";
import { FunctionCallExpressionContext } from "./TysonParser";
import { ListExpressionContext } from "./TysonParser";
import { IdentifierExpressionContext } from "./TysonParser";
import { StringExpressionContext } from "./TysonParser";
import { ExpressionExpressionContext } from "./TysonParser";
import { IdentifierFunctionCallContext } from "./TysonParser";
import { ProgContext } from "./TysonParser";
import { StatementContext } from "./TysonParser";
import { AssignmentContext } from "./TysonParser";
import { FunctionCallContext } from "./TysonParser";
import { IfStatementContext } from "./TysonParser";
import { IfStatContext } from "./TysonParser";
import { ElseIfStatContext } from "./TysonParser";
import { ElseStatContext } from "./TysonParser";
import { ForStatementContext } from "./TysonParser";
import { WhileStatementContext } from "./TysonParser";
import { ExprListContext } from "./TysonParser";
import { ExpressionContext } from "./TysonParser";
import { ListContext } from "./TysonParser";
import { IndexesContext } from "./TysonParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TysonParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface TysonVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `unaryMinusExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `notExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpression?: (ctx: NotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `powerExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowerExpression?: (ctx: PowerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `multExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultExpression?: (ctx: MultExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `addExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddExpression?: (ctx: AddExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `compExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompExpression?: (ctx: CompExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `eqExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqExpression?: (ctx: EqExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `andExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpression?: (ctx: AndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `orExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpression?: (ctx: OrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ternaryExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTernaryExpression?: (ctx: TernaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `inExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInExpression?: (ctx: InExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberExpression?: (ctx: NumberExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolExpression?: (ctx: BoolExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullExpression?: (ctx: NullExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `listExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListExpression?: (ctx: ListExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `identifierExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpression?: (ctx: IdentifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringExpression?: (ctx: StringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionExpression?: (ctx: ExpressionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `identifierFunctionCall`
	 * labeled alternative in `TysonParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierFunctionCall?: (ctx: IdentifierFunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `TysonParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `TysonParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TysonParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `TysonParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `TysonParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TysonParser.ifStat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStat?: (ctx: IfStatContext) => Result;

	/**
	 * Visit a parse tree produced by `TysonParser.elseIfStat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseIfStat?: (ctx: ElseIfStatContext) => Result;

	/**
	 * Visit a parse tree produced by `TysonParser.elseStat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseStat?: (ctx: ElseStatContext) => Result;

	/**
	 * Visit a parse tree produced by `TysonParser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TysonParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TysonParser.exprList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprList?: (ctx: ExprListContext) => Result;

	/**
	 * Visit a parse tree produced by `TysonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TysonParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;

	/**
	 * Visit a parse tree produced by `TysonParser.indexes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexes?: (ctx: IndexesContext) => Result;
}

